---
layout: page
title: ThumBOT
description: UCI Biorobotics Lab stroke rehabilitation robot.
img: assets/img/biorobotics_favicon.jpg
importance: 3
category: College/Professional
---

Thumbnail credit: [UCI Biorobotics Lab](https://faculty.sites.uci.edu/bioroboticslab/)  

Problem:    Develop an app to control and augment ThumBOT, a **cheap, portable stroke rehabilitation robot** for the thumb. Include engaging **training games** to improve rehabilitation rates.  

Solution:   Implement **UART** and **Bluetooth Low Energy** (BLE) protocols for communication between phone, Teensy MCU, and ESP-32. Utilize the **React Native** framework and embedded **Arduino/C++ code**, with a **SQLite** backend for storage.  

Results:    Delivered working game and application with user profiles, training/assessment settings, and **adaptive difficulty algorithm** to maximize improvement. Documented code architecture for future developers to conduct patient tests and data analysis.  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/thumbot/block_diagram.jpg" title="Control block diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ThumBOT App code architecture.
</div>

This project was my first serious foray into app development, and I enjoyed learning all the different layers that makes an app efficient and scalable. I chose **React Native** to prevent code duplication for Android and IOS, and **BLE** for easy, fast connection and much lower power consumption than Wi-Fi.

In particular, I think the **repository pattern** layer to simplify storage from the game into a local database will be useful to apply in the future.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/thumbot/bt_connection.gif' | relative_url }}" loading="eager" class="img-fluid rounded z-depth-1" alt="BT connection test">
    </div>
</div>
<div class="caption">
    Bluetooth connection test between mobile phone -> ESP-32 -> Teensy robot MCU. Full ThumBOT not pictured.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/thumbot/game.gif' | relative_url }}" loading="eager" class="img-fluid rounded z-depth-1" alt="SomatoCircleJump game">
    </div>
</div>
<div class="caption">
    SomatoCircleJump rehabilitation game. Includes optional adaptive difficulty algorithm.
</div>

The idea of this game is that the ball maps to the position of the thumb in the actual robot *that they cannot see*. The user clicks a button on the robot (or taps on the screen if the phone is connected) to "fire the ball," and receives a score based on accuracy.
