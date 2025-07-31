# ✉️ Takeoff Tracker
### Takeoff Tracker is a Leave letter management app designed specifically for managing employee leave letters.
## 🎨 My Interactive Figma Design for the Takeoff Tracker
- **Desktop View**: [View Desktop Prototype](https://www.figma.com/proto/Nqnd6N2z0hHz7xhZbs6gXJ/Untitled?node-id=5-41&p=f&t=luOeLOdkKSL1Fn3e-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A41)
- **Mobile View**: [View Mobile Prototype](https://www.figma.com/proto/3DLfBlc29lkAnVRdS4wDG9/Untitled?node-id=2-2&p=f&t=1Px57akMG5T2avNj-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1)
## Modules
## Admin
- Add Employees and Managers : Add new employees and managers to the platform. Employees and managers receive an email with their unique email address and password; they are the only ones who can access the dashboard by using this information.
- Approve or Reject the Leave letter of Manager : The admin can view a leave request letter that the manager has sent and admin can approve or reject the request .The manager's dashboard displays the message indicating approval or rejection.
- Remove and Update Employees and managers : Remove and Update employees and managers from the platform.
- View Employees and Managers: View a separate list of all registered employees and Managers. 
## Manager
- Approve or Reject the Leave letter of Employees : The Manager can view a leave request letter that the employee has sent and manager can approve or reject the request .The employees dashboard displays the message indicating approval or rejection.
- Manager can send leave request letter : Manager can send leave request letter to admin.
- Leave History : The manager has access to the history of sent leave letters, and the pending status of such letters is updated upon approval or rejection by the admin.
- Employees Details : Manager can see all employee details.
## Employee
- Employees can send leave request letter : Employees can send leave request letter to manager.
- Leave History : The employee has access to the history of sent leave letters, and the pending status of such letters is updated upon approval or rejection by the manager.
- Leave Count : Employees can see the count of each leave (sick leave, casual leave, annual leave) that has been sent.
## How to install
- git clone `git@github.com:Sneha-p1/Takeoff-Tracker.git`
- To run : `docker compose up --build`
-  you can access the application in your web browser at : `http://localhost:3000`
 
