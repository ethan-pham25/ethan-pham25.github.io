---
layout: page
title: Mr. Krabs
description: FRC Team 3189 Circuit Breakers' 2025 Robot
img: assets/img/frc_robot.jpg
importance: 1
category: High School
---

Problem:    Develop **reliable** and **highly-automated** software to effectively control a high-scoring FRC robot for the 2025 season.   

Solution:   Use WPILib C++ to implement per-subsystem **finite state machines** and **PID + FF** (feedforward) controllers for state 
            transitions. Leverage **inverse kinematics** for intuitive swerve drive control and **Kalman Filters** for updating odometry
            with vision pose estimates.  

Results:    Placed 11th/35 and 9th/34 at our competitions, marking **team all-time best season ranks**. Improved software architecture for future teams.  

Repository:  [https://github.com/FIRSTTeam3189/Robot2025v2](https://github.com/FIRSTTeam3189/Robot2025v2)

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/frc/reef.jpg" title="Practice scoring element" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <img src="{{ '/assets/img/frc/l4_manual.gif' | relative_url }}" loading="eager" class="img-fluid rounded z-depth-1" alt="Manual L4 scoring">
    </div>
</div>
<div class="caption">
    On the left, a practice scoring element for the 2025 Reefscape game. Note the QR code-like Apriltag. On the right, a test of manual scoring on the highest level - for which only two buttons are required.
</div>

Working on FRC software taught me the importance of prototyping and testing. The initial scoring controls were clunky, so I grouped together subsystem state transitions into just two buttons for manual control at any scoring level - one for intake, and one for each scoring level.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/frc/pathplanner.gif' | relative_url }}" loading="eager" class="img-fluid rounded z-depth-1" alt="Pathplanner auto routine">
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/frc/2_l4_auto.gif' | relative_url }}" loading="eager" class="img-fluid rounded z-depth-1" alt="2x autonomous L4 scoring">
    </div>
</div>
<div class="caption">
    On the left, an autonomous routine planned in WPILib Pathplanner. On the right, that autonomous routine being successfully executed
    in competition (our robot left).
</div>

Additionally, I worked on using the **Apriltags** (as pictured above) to calculate camera offsets and fuse the estimated position from the vision system with the wheel odometry + IMU, using a Kalman Filter. This enables the robot to score fully autonomously when combined with autonomous pathplanning, given the target to score on.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        <img src="{{ '/assets/img/frc/systems_check.gif' | relative_url }}" loading="eager" class="img-fluid rounded z-depth-1" alt="Competition systems check">
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <img src="{{ '/assets/img/frc/algae_fling.gif' | relative_url }}" loading="eager" class="img-fluid rounded z-depth-1" alt="Algae (ball) throwing">
    </div>
</div>
<div class="caption">
    On the left, a "systems check" performed during competition to ensure subsystem integrity. On the right, a scoring sequence for a new game piece I devised during competition.
</div>

My most memorable days were the 8-10+ hours spent working on the robot in "the pit," driving the robot on the competition field, and fixing software bugs on the fly. I built up my determination, adaptability, and rigor when it comes to engineering; it took long hours of troubleshooting, developing entirely new scoring modes (for the "algae" ball) in the middle of competition, and methodical systems checks before OK'ing the robot to go to each match.

I'll always remember FRC fondly as a great start to my journey into software and engineering in general!
