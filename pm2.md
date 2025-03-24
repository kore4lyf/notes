Comprehensive Notes on Running Processes with PM2, tmux, and Related Tools (Including PM2 Tutorial)


---

Objective

To efficiently manage and automate the execution of multiple applications (JavaScript, Python, Bash scripts, and npm-based apps) using tools like PM2, tmux, cron, and systemd. This includes a detailed tutorial on PM2, its features, and usage.


---

Topics Discussed

1. Introduction to PM2


2. Tutorial: Using PM2


3. Log Management with PM2 Log Rotate


4. Auto-Executing Scripts Across Reboots


5. Running Multiple Apps with PM2


6. Handling WSL Closures


7. Custom Shell Script to Automate Processes


8. Complementary Tools: tmux, cron, and systemd


9. Challenges & Solutions




---

1. Introduction to PM2

PM2 is a production-grade process manager designed for Node.js applications but supports other script types like Python, Bash, etc. It simplifies app management with features like:

Automatic restarts on crash.

Persistent processes across system reboots.

Built-in log management.

Monitoring (CPU, memory usage).



---

2. Tutorial: Using PM2

Installing PM2

npm install pm2 -g

Basic Commands

1. Start an Application:

JavaScript app:

pm2 start app.js --name "my-js-app"

Python script:

pm2 start script.py --interpreter python3 --name "my-python-app"

Bash script:

pm2 start script.sh --interpreter bash --name "my-bash-script"

npm app:

pm2 start npm --name "my-npm-app" -- start



2. Monitor Processes:

pm2 list

View detailed info about a process:

pm2 show <process-id|name>


3. Stop, Restart, and Delete Processes:

Stop a process:

pm2 stop <process-id|name>

Restart a process:

pm2 restart <process-id|name>

Delete a process:

pm2 delete <process-id|name>



4. Save Current State: Save running processes so they restart automatically after a reboot:

pm2 save


5. Startup Script: Enable processes to auto-start on system boot:

pm2 startup


6. Log Management: View logs:

pm2 logs <process-id|name>

Clear logs:

pm2 flush



Advanced Features

1. Use a Configuration File: PM2 allows defining multiple apps in an ecosystem.config.js file:

module.exports = {
  apps: [
    {
      name: "my-app",
      script: "app.js",
      cwd: "/path/to/directory1",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};

Start all apps in the file:

pm2 start ecosystem.config.js


2. Cluster Mode: Run Node.js apps in cluster mode for performance:

pm2 start app.js -i max


3. Resurrect Saved Processes: Restore previously saved processes:

pm2 resurrect




---

3. Log Management with PM2 Log Rotate

Install PM2 Log Rotate

pm2 install pm2-logrotate

Configure Log Rotation

Rotate logs exceeding 10MB:

pm2 set pm2-logrotate:max_size 10M

Retain logs for 1 cycle (e.g., 30 minutes):

pm2 set pm2-logrotate:retain 1

Rotate every 30 minutes:

pm2 set pm2-logrotate:rotateInterval '*/30 * * * *'



---

4. Auto-Executing Scripts Across Reboots

1. Save PM2 state:

pm2 save


2. Enable PM2 to start on boot:

pm2 startup




---

5. Running Multiple Apps with PM2

Using PM2, you can start apps of various types from different directories. Example commands:

Start a JavaScript app:

pm2 start /path/to/app.js --name "js-app"

Start a Python app:

pm2 start /path/to/script.py --interpreter python3 --name "python-app"

Start a Bash script:

pm2 start /path/to/script.sh --interpreter bash --name "bash-script"

Start an npm app:

pm2 start npm --name "npm-app" -- start



---

6. Handling WSL Closures

PM2 persists processes across abrupt WSL closures.

Use pm2 save to save processes and pm2 resurrect to restore them.

For better persistence, combine with cron or startup scripts.



---

7. Custom Shell Script to Automate Processes

Create a script to start apps automatically:

#!/bin/bash

# Start apps in sequence
cd /path/to/directory1 || { echo "Failed to enter directory1"; exit 1; }
pm2 start app.js --name "js-app"

cd /path/to/directory2 || { echo "Failed to enter directory2"; exit 1; }
pm2 start script.py --interpreter python3 --name "python-app"

cd /path/to/directory3 || { echo "Failed to enter directory3"; exit 1; }
pm2 start script.sh --interpreter bash --name "bash-script"

cd /path/to/directory4 || { echo "Failed to enter directory4"; exit 1; }
pm2 start npm --name "npm-app" -- start

echo "All apps started successfully!"

Make it executable:

chmod +x run_apps.sh

Run the script:

./run_apps.sh


---

8. Complementary Tools

tmux: Persistent terminal sessions for managing multiple tasks.

cron: Schedule recurring tasks (e.g., auto-start PM2 processes).

systemd: Robust process manager for services in Linux.



---

9. Challenges & Solutions

Processes lost after reboot: Use pm2 save and pm2 resurrect.

Abrupt WSL closures: Combine PM2 with cron or startup scripts.

Short log retention: Use PM2 Log Rotate to delete logs every 30 minutes.



---

Conclusion

PM2, combined with tools like tmux and cron, provides a robust solution for managing multi-language applications in production or development environments. It simplifies process monitoring, log management, and auto-restart, making it an essential tool for efficient workflows.

Let me know if you'd like additional clarifications or assistance!

