# gat-lps

## WHAT IS THIS?
Location Positioning Server to track a few clients in a given zone. Mainly meant for the GAT system.

This document is split into LPS Installing and development below.

# FOR LPS INSTALLING


# FOR LPS DEV

## WHAT TOOLS DO I NEED?
1. Raspberry Pi Zero W
2. [Micro SD](https://www.raspberrypi.org/documentation/installation/sd-cards.md)
3. [NodeJS](https://nodejs.org/en/)
4. Love
5. PuTTy [Google search putty download OS]
6. https://www.youtube.com/watch?v=O4oVIsZJDs4
	Linux Users: after watching the video do the following steps.
	https://www.raspberrypi.org/forums/viewtopic.php?t=164999
7. You are good to go. To install the code you've been working on, type in the following command into the ssh of raspberry pi: `npm install --save username/repo#branch-name`
8. [Install node into raspberry pi](https://github.com/nodesource/distributions/blob/master/README.md)

## HOW TO GET STARTED
1. JOIN OUR MEETUP
2. OR, JOIN OUR DISCORD SERVER,
3. OR, COMMIT SOME INFO ON BUGS, IDEAS, FEATURES, THANK YOU LETTERS, OR ANY GOOD VIBES.

## SET UP

### Written Steps
#### Flash OS into micro SD
Install OS using any of the steps mentioned [here](https://www.raspberrypi.org/documentation/installation/installing-images/README.md)

## How to test?
### VSCode
#### add the following to launch.json
```
{
	// Use IntelliSense to learn about possible attributes.
	// Hover to view descriptions of existing attributes.
	// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
	"version": "0.2.0",
	"configurations": [
		{
		  "type": "node",
		  "request": "launch",
		  "name": "Launch current file w/ ts-node",
		  "protocol": "inspector",
		  "args": ["${relativeFile}"],
		  "cwd": "${workspaceRoot}",
		  "runtimeArgs": ["-r", "ts-node/register"],
		  "internalConsoleOptions": "openOnSessionStart"
		}
	]
}
```
### Debug test/test.ts
- Place break points in test/test.ts:runTest()
- While in the test/test.ts press `F5`


