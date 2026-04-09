---
layout: page
title: Satellite Testing
description: Testing and automation projects for internship at Pumpkin Space Systems.
img: assets/img/bm2.jpg
importance: 1
category: College
---

Thumbnail credit: [Pumpkin Space Systems BM2](https://www.pumpkinspace.com/store/p198/Intelligent_Protected_Lithium_Battery_Module_with_SoC_Reporting_%28BM2%29.html)  

Problem:    Automate testing and characterization of **BM2 satellite battery**. Streamline testing of future satellite modules with easy, remote electronic **instrument control**, and a **unified module testing server**.  

Solution:   Troubleshoot BM2 SCPI commands in Python automation script and **I2C communication** via documentation review, code improvements, and **oscilloscope waveform analysis**. Develop simple, responsive instrument testing UIs with **GraphQL API** backend in **Rust**.  

Results:    Performed successful automatic charge/discharge cycle on BM2. Deployed working test interfaces for 3+ instruments. Implemented initial foundation for module testing server.  

*Also, my work played a very, very small part in this, but it's too cool not to share: the BM2 was used in [NASA's **Artemis II** in Pumpkin's first manned spaceflight mission!](https://www.pumpkinspace.com/news/pumpkins-first-manned-spaceflight-mission)*  

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bm2.jpg" title="Pumpkin BM2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Intelligent Salltelite Lithium Battery Module - BM2. Image credit: <a href="https://www.pumpkinspace.com/store/p198/Intelligent_Protected_Lithium_Battery_Module_with_SoC_Reporting_%28BM2%29.html">Pumpkin Space Systems BM2</a>
</div>

Double-checking documentation for hours---and literally *watching a battery charge*, at some points---was surprisingly rewarding. I learned the fundamentals of how **CubeSats** work, methodical troubleshooting, and how to work with **SCPI** commands.  

<div class="row">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pumpkin/keysight_device.JPEG" title="Keysight switching instrument" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pumpkin/keysight_output.jpg" title="Keysight state output" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left, Keysight multifunction switching device, one of the test instruments I worked on. Right, state output of Keysight switching device.
</div>

I also enjoyed improving my **Rust** skills and learning how to implement **GraphQL**. I deployed a **Python scripting interface** to easily control these instruments through the backend for faster testing and automation. This used [PYO3](https://pyo3.rs/v0.28.3/python-from-rust.html) to call Python code directly from Rust!

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pumpkin/keysight_ui.JPEG" title="Keysight switch UI" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pumpkin/rigol_ui.jpg" title="Rigol load UI" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left, state + control UI for Keysight switching device. Right, state UI for Rigol electronic load.
</div>

It was very satisfying to finally be able to click a button and hear the *click* of a switch flipping across the room. The testing interface I developed could be used to remotely control electronic instruments like **power supplies**, **loads**, and **RF multiplexers**. 