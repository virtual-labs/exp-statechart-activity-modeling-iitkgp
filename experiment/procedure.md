## Procedure

Steps for conducting the experiment

#### **General Instructions**

Follow are the steps to be followed in general to perform the experiments in **Software Engineering Virtual Lab.**

1. Read the theory about the experiment
2. View the simulation provided for a chosen, related problem
3. Take the self evaluation to judge your understanding (optional, but recommended)
4. Solve the given list of exercises


#### **Experiment Specific Instructions**
Following are the instructions specifically for this experiment:

### **Steps for Drawing Statechart Diagrams**

1. **Add states:** Identify the possible states of the system and add them through **table #1**. Type in the state name in the text box, and then press the **'Add'** button. The new state will be shown in a new row in **table #4**. The new state will also get added to all the drop down lists in the workspace that indicates state.
2. **Internal activities of a state** can be added through **table #2**. Select the desired state from the first drop down list, select an action label from the second drop down list, type in the action expression, and then click on the **'Add'** button. The **'Activities'** column in **table #4** for the selected state would get updated accordingly.
3. **Add state transitions:** Go to **table #5** to specify state transitions. Select the current state from the first drop down list and next state from the second drop down list. In the text box under the **'Event'** column type in the which event is causing the state transition. Similarly, type in the **'Guard Condition'** and **'Action'** in the text boxes under the respective columns. Table #6 will display the newly added state transition.
4. **[Optional]** A note could be attached to any state through **table #3**. Please select the state from the first drop down list in the table, type in the text of the note and click on the **'Add'** button.
5. Finally, click on the **'Draw'** button to generate the UML diagram as per your specifications.

**NOTE**
The UML diagram is generated after adding all the states and transitions. Also, any state or transition that has been wrongly specified could be removed from tables #4 and #6.

### **Steps for Drawing Activity Diagrams**

1. In **table #1**, type in name of the activity in the text box, and click on the **'Add'** button. The new activity would get added into all the drop down lists (that indicate an activity) appearing in the subsequent tables.
2. To define a flow from one activity to another, go to **table #2**, select the current and next activities from the first two drop down lists in the table, specify a (optional) guard condition, and click on the **'Add'** button. The transition would appear as a new row in **table #3**.
3. **Parallel Activities** (either forking or joining) could be specified through **table #4**. The first row of this table allows creation of parallel activities, while the **second** row enables merging.
   1. The **third** column indicates the **'Synchronization Bar'**, and the drop down list under this column shows all synchronization points. A new point could be added by clicking on the green coloured add button beside this drop down list.
   2. To create a set of parallel activities, select the current activity from the first drop down list in the first row. Now select a synchronization point from the drop down list in the third column. Next, from the five drop down lists under the **'Following Activity(ies)'** column, select **at least two** unique activities. Then click on the 'Add' button to create the parallel activities. They would appear in a new row in **table #5**.
   3. To join a set of parallel activities, select **at least two** unique activities from the five drop down lists in the second row of the table. Select a join point from the **'Synchronization Bar'** drop down list. Select the activity which should be performed after merging from the single drop down list under the **'Following Activity(ies)**' column, and then click on the **'Add'** button. A new row would get inserted in **table #5** showing these inputs.
4. **Activities performed conditionally**: Select the current activity in **table #6** after which a decision is to be taken. The condition to check is to be typed in the first text box under the second column of the table. The three radio buttons just below this text box are for identifying what should be done if the condition is **True**. A similar set of three radio buttons appear at the bottom under the **ELSE** block to specify whether an activity should be performed, or should fork to multiple activities, or should join, if the condition is **False**. Click on the **'Add'** button to add this conditional flow. A new row would be added in table #7 reflecting the new entries.

**NOTE**
- Names are used for different synchronization bars only to uniquely identify (and work with) them to generate the UML diagram. They are not required as per standard UML specifications.
- Please select different synchronization points for fork and join.
- The UML diagram could be generated at any point of time provided the constraints imposed by the workspace are met by clicking on the **'Draw'** button