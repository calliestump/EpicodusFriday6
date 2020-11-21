# Currency Exchange

#### **11.20.20**

## By _Callie Stump_
---
## **Description**
This project will allow the user to enter a U.S dollar amount, then convert it to a different currency. The user is allowed five different conversions. 

## **Setup**
User will need to have an [Exchange Rate API key](https://www.exchangerate-api.com/). Follow the instructions to make a personal key. Once finished, use the generated link supplied for the API. 
1. Copy this download link: https://github.com/calliestump/Friday6.git
2. Open bash and go to the directory where you would like to store your cloned project.
3. Clone the repo.
```
git clone "https://github.com/calliestump/Friday6.git"
```
4. Navigate to the cloned project folder and open VS code.
```
$ cd Desktop
$ cd [known directory]
$ code .
```
#### Dont forget that in order to push any changes you need to add your own GitHub repo. to your project.
```
git remote add origin https://github.com/calliestump/Friday6
```
## **Technologies Used**
* HTML
* CSS
* javaScript
* Bootstrap
* API
* Node
* Git
* Github

## **Specs**
<details>
<summary>Expand Specs</summary>
<table>
  <tr>
    <th>Test</th>
    <th>Input</th>
    <th>Output</th>
    <th>Completed</th>
  </tr>
  <tr>
    <td>Should clear input fields when form is submitted..</td>
    <td>clear();</td>
    <td>Input fields 1&2 are empty</td>
    <td>True</td>
  </tr>    
  <tr>
    <td>Should correctly convert the users input (USD) to any implemented currency.</td>
    <td>$8.00USD</td>
    <td>$10.48</td>
    <td>True</td>
  </tr>
  <tr>
    <td>Should return API error if a call to it fails.</td>
    <td>$4.00USD</td>
    <td>ERROR: Invalid API Key assignment</td>
    <td>True</td>
  </tr>
  <tr>
    <td>Should give an alert if no information is detected.</td>
    <td>--</td>
    <td>ERROR: No information was detected</td>
    <td>True</td>
  </tr>        
</table>  

## Legal
Copyright (c) 2020 Callie Stump
