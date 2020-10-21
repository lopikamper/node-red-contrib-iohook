node-red-contrib-iohook
========
### Description

Node for capturing keystrokes and mousestrokes.

### Information

Simple node to catch key strokes on your keyboard and mouse.
Input: messages with msg.topic set to "state" with msg.payload true/false [boolean] are used to control
scanning of keyboard strokes and mouse clicks. Other messages are discarded.
Output: msg.topic is either "keyboard" or "mouse" following by msg.payload typeof number with number of keystroke or number of button clicked on mouse.<br>
When the control message is recieved, node sends message about changed state if command is correct with msg.topic "info".

### Author

Copyright 2020 Bc. Jan Janovský
Faculty of Mechanical Engineering
Czech Technical University in Prague

License
Apache-2.0
