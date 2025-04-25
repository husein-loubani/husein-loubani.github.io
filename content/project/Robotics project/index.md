---
title: Autonomous-Driving-Turtlebot3
summary: Detect and follow lanes to complete a mission.
tags:
  - ROS
  - Python
  - OpenCV
date: '2023-01-01'

# Optional external URL for project (replaces project detail page).
external_link: ''

#image:
#  caption: Photo by rawpixel on Unsplash
#  focal_point: Smart


url_code: 'https://github.com/muttequrashi/Autonomous-Driving-Turtlebot3'
url_pdf: ''
url_slides: ''
url_video: ''

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ''
---
**Project Goal:**
The goal of the Autonomous-Driving Turtlebot3 project is to achieve autonomous driving for a ground differential robot by using perception-based techniques. The primary task is to detect and follow lanes to complete a mission. In this project, the robot needs to navigate through a circuit, which includes passing through a low-light tunnel.

**Required Libraries and Packages to Start:**
- ros-noetic-image-transport
- ros-noetic-cv-bridge
- ros-noetic-vision-opencv
- opencv
- libopencv-dev
- ros-noetic-image-proc
- Autorace package

**Steps to Get Started:**

**1. Installing the Required Packages**
   - Follow the instructions provided on the emanual robotics website.
   - Install the AutoRace 2020 meta package on the Remote PC.
   - Install additional dependent packages on the Remote PC.

```shell
cd ~/catkin_ws/src/
git clone -b noetic-devel https://github.com/ROBOTIS-GIT/turtlebot3_autorace_2020.git
cd ~/catkin_ws && catkin_make
sudo apt install ros-noetic-image-transport ros-noetic-cv-bridge ros-noetic-vision-opencv python3-opencv libopencv-dev ros-noetic-image-proc
```

**2. Connecting to Turtlebot3**
   - Connect to the Turtlebot over SSH with the password 'napelturbot'.
   - It's crucial to bring up the Turtlebot before running any nodes related to camera and robot control.

```shell
ssh ubuntu@192.168.0.200
roslaunch turtlebot3_bringup turtlebot3_robot.launch
```

**3. Camera Calibration**
   - Camera calibration involves the following steps:
     - Launch roscore on the Remote PC.
     - Trigger the camera on SBC.
     - Perform intrinsic camera calibration.
     - Perform extrinsic camera calibration.

**4. ROS Package Structure:**
   - The ROS package includes several launch files, such as extrinsic_calibration.launch, intrinsic_calibration.launch, controller.launch, and lane_detection.launch.
   - These files are responsible for subscribing to camera topics, performing lane detection, and controlling the robot's movements.

**5. Lane Detection:**
   - Lane detection is achieved using binary thresholding of the projected image and creating a histogram.
   - The robot decides to turn right, left, or move straight based on the values in the histogram.
   - The project's lane detection algorithm is inspired by "The Ultimate Guide to Real-Time Lane Detection Using OpenCV."

**6. Controller:**
   - The project uses a Proportional-Derivative (PD) controller.
   - The controller class subscribes to lane detection topics to get the center point.
   - It calculates the error and computes the rotational velocity to minimize the error.
   - Linear velocity is fixed, and only the rotational velocity changes.

**To Run the Code:**
1. Run ROS master on the PC: `roscore`.
2. Connect to the Turtlebot: `ssh ubuntu@192.168.0.200`.
3. Bring up the Turtlebot: `roslaunch turtlebot3_bringup turtlebot3_robot.launch`.
4. Start capturing from the camera: `roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch`.
5. On the PC, run the following files in separate terminals:
   - `roslaunch group_4 extrinsic_calibration.launch`
   - `roslaunch group_4 intrinsic_calibration.launch`
   - `roslaunch group_4 lane_detection.launch`
   - `roslaunch group_4 controller.launch`.
6. Use `rqt_image_view` in another terminal to view the results on various topics.

