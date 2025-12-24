# Angular-project--Nishtha-Punjani

Cricket Score Monitoring App using Angular
Project Integration: Must Implement the concepts like Component Interaction, HTML,
CSS with Bootstrap, Template Driven Form, Two Way Data Binding, Component
Properties and Control Statement to develop the app.
Components Required: AppComponent & ScoreBoardComponent.
Project Layout: Create a main heading in AppComponent and Create a TDF in
ScoreBoardComponent with 6 input fields, 1 Sub Heading and 6 buttons with some custom
CSS and bootstrap classes applied.

Project Requirement:
• When Application Executed, Overs (5), Balls (30) & Wickets (10) must get updated
in the respective input fields.
• Set the target input field manually as per your choice. But make sure the run buttons
should not function when target is not set. If the run button is clicked without setting
the target, alert a message to the user to set the target. When the target is set, only
then allow the user to click on to the run buttons.
• Whenever we set or change the target input field value, immediately it must get
updated in the need input fields as well.
• Based on the specific run button gets clicked, balls must get decremented by 1, need
must get decremented and current run must get incremented accordingly.
For Example: If 2-Run button gets clicked, immediately balls must reduce by 1,
need must reduce by 2 and current run must increase by 2.
• Parallelly check, whether the balls get divided 6. If yes, 1 over must get reduced in
the overs form field.
• For Wickets, parallelly check whether the current run get divided by 3. If yes,
wicket must get decremented by 1.
• During continuous run button click, if the need value becomes 0 and at the same
time balls & wickets value remains more than 0, then alert a message to the user as
Match Won. In case, if the need value is still more than 0, but either balls or wickets
becomes 0, then alert a message to the user as Match Lost.
• Finally, after the Match Won or Match Lost alert message, set all the input field
value to 0.
Project Mapping: On Project Execution, AppComponent must display the main heading
and it must map the ScoreBoardComponent. Then, ScoreBoardComponent must render the
template driven form in the browser as shown above in the sample project view.
