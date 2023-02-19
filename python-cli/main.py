from convex import ConvexClient
import argparse
import platform
import psutil
from datetime import datetime, timedelta
import time 
import docker
import os
import shutil
import getpass

parser = argparse.ArgumentParser(prog= "CommuniPute", description="Client to run program on your system")
parser.add_argument('-m', '--memory', type=float, help='Amount of memory (in MB) to make available')
parser.add_argument('-u', '--username', type=str, required=True, help='Username (if you don\'t have one, register at ____)')
parser.add_argument('-t', '--available-time', type=int, required=True, help='Available time in minutes')

args = parser.parse_args()

# Get system info
if args.memory == None:
    ram = str(round(psutil.virtual_memory().total / (1024.0 **3)))+" GB"
else:
    ram = str(args.memory) + " GB"
arch = platform.machine()
op_system = platform.system()
proc = platform.processor()
if op_system == 'Darwin':
    # MacOS 
    version = platform.mac_ver()[0]
else: 
    version = platform.release()
# Get end time of availability
now = datetime.now()
available_till = now + timedelta(minutes= args.available_time)
    

# Connect to convex
cloud_address = "https://cheerful-oyster-672.convex.cloud" 
client = ConvexClient(cloud_address)
client.set_debug(True)

print("Connected to convex client successfully")

# Setup docker client
docker_client = docker.from_env()

# authenticate and get client id 
def get_client_id(username, password):
    # do something with auth
    client_id = client.query('login', username, password)
    return client_id

try: 
    p = getpass.getpass()
except Exception as error:
    print('Error:', error)

host_id = get_client_id(args.username, p)

# send availability information
client.mutation('makeComputeAvailable', host_id, op_system, ram, 'Python 3.10', arch, version, str(available_till))

# handle receipt of function
TEMP_FOLDER_NAME = 'temp'
IMAGE_NAME = 'tree-hacks-img'
def handle_request(request): 
    os.mkdir(TEMP_FOLDER_NAME)
    
    shutil.copyfile('dockerfiles/Dockerfile', 'temp/Dockerfile')
    code = request['code']                      # plaintext code 
    requirements = request['requirements']      # python library dependencies
    with open(f"{TEMP_FOLDER_NAME}/requirements.txt", "x") as f:
        f.writelines(requirements)
    with open(f"{TEMP_FOLDER_NAME}/code.py", "x") as f:
        f.write(code) 
    
    docker_client.images.build(path=f"./{TEMP_FOLDER_NAME}", tag=IMAGE_NAME)
    output = docker_client.containers.run(IMAGE_NAME, remove=True, stderr=True)
    
    # cleanup
    docker_client.images.remove(IMAGE_NAME)
    shutil.rmtree(TEMP_FOLDER_NAME)
    
    return output.decode()

    
# begin loop
while True: 
    request = client.query('listMessages', host_id)
    print(request)
    if request != None: 
        print(type(request['_id']))
        print('Code', request['code'])
        print('Requirements', request['requirements'])
        
        output = handle_request(request)
        # Update request and mark machine back to free state
        client.mutation('sendMessage', request['_id'], output)

    time.sleep(1)