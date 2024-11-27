import LeaveCount from "../components/LeaveCount";
import Navbar from "../components/Navbar";
import UserSidebar from "../components/UserSidebar";


const LeaveCountPage = () => {
    

    return (
        <div>
            <Navbar/>
            <div class="flex">
            
                <UserSidebar />
                <LeaveCount  />
            </div>
            
        </div>
    );
};

export default LeaveCountPage;
