import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";

export default function App() {
  const available_compute_resources = useQuery("listAvailableCompute") || [];


  // States for available compute input boxes
  const[host, setHost] = useState("");
  const[operating_system, set_operating_system] = useState("");
  const[ram_available,set_ram] = useState(0);
  const[cpu_arch_type, set_cpu] = useState("");
  const[os_version_info, set_version_info] = useState("");
  const[end_available_time, set_end_available] = useState("");

  // States for available compute
  const[availableComputeID, set_avail_compute_id] = useState("");
  const[code_to_run, set_code_to_run] = useState("");
  const[requirements_input, set_requirements] = useState("");

  // States for creating a user
  const [username, set_username] = useState("");
  const [first_name, set_first_name_username] = useState("");
  const [last_name, set_last_name_username] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");

  // Mutations for resources
  const requestResource = useMutation("requestSpecifiedAvailableCompute");
  const makeResourceAvailable = useMutation("makeComputeAvailable");
  const createUser = useMutation("createUser");

  // States for logging in
  const [username_login, set_login_username] = useState("");
  const [password_login, set_login_password] = useState("");
  let logged_in_user = useQuery("login", username_login, password_login);

  // Make compute available event handler
  async function makeComputeAvail(event) {
      event.preventDefault();
      setHost("");
      set_operating_system("");
      set_ram(0);
      set_cpu("");
      set_version_info("");
      set_end_available("");
      await makeResourceAvailable(host, operating_system, ram_available, "Python 3.10", cpu_arch_type, os_version_info,
          end_available_time);
  }

  // Request compute platform
    async function requestComputePlatform(event) {
      event.preventDefault();
      set_avail_compute_id("");
      set_code_to_run("");
      await requestResource(availableComputeID, logged_in_user, code_to_run);
    }

    // Create user
    async function createUserEventHandler(event) {
      event.preventDefault();
      set_username("");
      set_first_name_username("");
      set_last_name_username("");
      set_email("");
      set_password("");

      await createUser(username, first_name, last_name, email, password);

    }

    // Login user
    async function loginUser(event) {
      event.preventDefault();
      const user = await useQuery("login", username_login, password_login);
      logged_in_user = user._id;
      set_login_username("");
      set_login_password("");
    }

  return (
    <main>
      <h1>List of Available Compute</h1>
      <p className="badge">
        <span>{logged_in_user}</span>
      </p>
      <table>
              <tr>
                  <th>AVAILABLE RESOURCE REQUEST ID</th>
                  <th>HOST USER_ID</th>
                  <th>OPERATING SYSTEM</th>
                  <th>RAM_AVAILABLE</th>
                  <th>RUNTIME AVAILABLE</th>
                  <th>CPU ARCH TYPE</th>
                  <th>OS VERSION INFO</th>
                  <th>END AVAILABILITY TIME</th>
                  <th>IN PROGRESS FLAG</th>
                  <th>CREATION TIME</th>
              </tr>
        {available_compute_resources.map(availableResource => (
          <tr key={availableResource._id.toString()}>
              <th><span>{availableResource._id.toString()}</span></th>
              <th><span>{availableResource.host}</span></th>
              <th><span>{availableResource.operating_system}</span></th>
              <th><span>{availableResource.ram_available}</span></th>
              <th><span>{availableResource.runtime_available}</span></th>
              <th><span>{availableResource.cpu_arch_type}</span></th>
              <th><span>{availableResource.os_version_info}</span></th>
              <th><span>{availableResource.end_available_time}</span></th>
              <th><span>{availableResource.in_progress_flag.toString()}</span></th>
            <span>{new Date(availableResource._creationTime).toLocaleTimeString()}</span>
          </tr>
        ))}
      </table>
      <form onSubmit={makeComputeAvail}>
        <input
          value={host}
          placeholder="Host name"
          onChange={event => setHost(event.target.value)}
        />
          <input
              value={operating_system}
              onChange={event => set_operating_system(event.target.value)}
              placeholder="Operating System..."
          />
          <input
              value={ram_available}
              onChange={event => set_ram(event.target.valueAsNumber)}
              type="Number"
              placeholder="Ram_available..."
          />
          <input
              value={cpu_arch_type}
              onChange={event => set_cpu(event.target.value)}
              placeholder="CPU_Arch_type..."
          />
          <input
              value={os_version_info}
              onChange={event => set_version_info(event.target.value)}
              placeholder="OS_Version_Info..."
          />
          <input
              value={end_available_time}
              onChange={event => set_end_available(event.target.value)}
              placeholder="End_available_time..."
          />
        <input type="submit" value="Send" />
      </form>




        <form onSubmit={requestComputePlatform}>
            <input
                value={availableComputeID}
                placeholder="Available Request ID"
                onChange={event => set_avail_compute_id(event.target.value)}
            />
            <input
                value={code_to_run}
                onChange={event => set_code_to_run(event.target.value)}
                placeholder="Type code here"
            />
            <input
                value={requirements_input}
                onChange={event => set_requirements(event.target.value)}
                placeholder="Requirements here"
            />
            <input type="submit" value="Send" />
        </form>

        <form onSubmit={createUserEventHandler}>
            <input
                value={username}
                placeholder="Username"
                onChange={event => set_username(event.target.value)}
            />
            <input
                value={first_name}
                onChange={event => set_first_name_username(event.target.value)}
                placeholder="First name"
            />
            <input
                value={last_name}
                onChange={event => set_last_name_username(event.target.value)}
                placeholder="Last name"
            />
            <input
                value={email}
                onChange={event => set_email(event.target.value)}
                placeholder="email"
            />
            <input
                value={password}
                onChange={event => set_password(event.target.value)}
                placeholder="password"
            />
            <input type="submit" value="Send" />
        </form>

        <form onSubmit={loginUser}>
            <input
                value={username_login}
                placeholder="username"
                onChange={event => set_login_username(event.target.value)}
            />
            <input
                value={password_login}
                onChange={event => set_login_password(event.target.value)}
                placeholder="password"
            />
            <input type="submit" value="Send" />
        </form>

        <f></f>
    </main>
  );
}
