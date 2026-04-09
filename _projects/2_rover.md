---
layout: page
title: Rover
description: UCI Legacy Robotics Mars-like rover for URC/CIRC competitions.
img: assets/img/rover.jpg
importance: 2
category: College
---

Problem:    Develop realtime teleoperated and autonomous control of a 6-DOF robotic arm for Legacy Robotics, competing in the URC/CIRC competitions.  

Solution:   Implement **ROS2** Control **custom hardware interface**, MoveIt, and MoveIt Servo in **C++** and Python. Allow both Cartesian (XYZ) and joint-based velocity control.  

Results:    Delivered fully working arm simulation, on-time System Acceptance Review (SAR) documents for URC, and successful individual joint tests. Integrated tests and will be performed throughout the Spring 2026 quarter.  

Repository: [https://github.com/UCI-Legacy-Robotics/URC-2026](https://github.com/UCI-Legacy-Robotics/URC-2026)

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rover/arm_control_diagram.jpg" title="Arm control block diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    High-level arm control architecture. Most of these blocks run as connected nodes in ROS2.
</div>

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rover/arm_urdf.png" title="Arm URDF" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rover/move_it_test_2x.gif" title="Arm control simulation (2X speed)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left, arm Unified Robot Description Format (URDF), which specifies the arm's joints and links, as well as their physical properties. Right, simulated Cartesian joystick control test (2X speed).
</div>

Designing and implementing the arm control stack has been an amazing learning opportunity; **ROS2** and its add-ons are used extensively in industrial robotics.

I chose to include **MoveIt** for inverse kinematics and a custom **ROS2 Control** hardware interface for our specific arm setup. This enables low-latency telemetry and control sharing between MoveIt and motor drivers.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/rover/arm_test.gif" title="Arm joint test" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/rover/driving.gif" title="Rover drive test" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left, arm wrist pitch test. Right, full rover drive test.
</div>

In Winter 2026, we made our SAR submission for URC, and performed our first system tests. After discovering areas for improvement across all subteams, we are currently iterating on hardware, electronics, and software to improve robustness and scoring capability.

Throughout Spring 2026, I hope to help conduct integrated tests of my control code on real hardware.