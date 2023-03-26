import React,{useState} from 'react';
import '../../styles/CreateProject.css'
import { Link, useNavigate } from "react-router-dom";

const CreateProject = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        title: "",
        description: "",
        status: "",
        member: "",
    });
    const [isLoading, setIsLoading] = useState(false);


    const handleCreateProject = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch("",{
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((response)=>{
            if(response.ok){
                response.json().then((data) => {
                    localStorage.setItem("Authorization", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    console.log("Project added Successfully")
                    navigate("/landing");
                    setIsLoading(false);
                  });
            }else{
                console.log("Error in Adding Task");
            }
        })
    }

    return ( 
        <>
        <div className="sign-up-body">
            <div className="show-body">
                <h1>
                    <Link href="/landing" className="return-home">
                    <i className="fas fa-project-diagram" id="project-logo"></i><span className="logo-name">Task Train App</span>
                    </ Link>
                </h1>
                <h2 className="h2-signup"> Create Task </h2>
                <div className="form-div">
                    <form  className="sign-up-form" onSubmit={(e) => handleCreateProject(e)}>
                        <div className="signup-entries">
                            <div>
                                <div>
                                    <div className="email-entry">
                                        <label htmlFor="" className="email-label">Title</label>
                                    </div>
                                    <div className="placeholder-email">
                                        <input 
                                        type="text" 
                                        name="title" 
                                        placeholder="title" 
                                        autoComplete="off" 
                                        className="input-email1"
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                       
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="username-entry">
                                        <label htmlFor="" className="username-label"> Task Description</label>
                                    </div>
                                    <div className="placeholder-username">
                                        <textarea 
                                        type="text" 
                                        name="description" 
                                        placeholder="Describe project..."  
                                        className="input-username"
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                       
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="username-entry">
                                        <label htmlFor="" className="username-label"> Task Status</label>
                                    </div>
                                    <div className="placeholder-username">
                                        <select 
                                        type="text" 
                                        name="status"
                                        className="input-username"
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: parseInt(e.target.value) })}
                                        > 
                                        <option > Choose below</option>
                                        <option value={0}> Created</option>
                                        <option value={1}>Ongoing</option>
                                        <option value={2}> Completed</option>
                                        <option value={3}> Cancelled</option>
                                        </select>
                                    </div>
                                </div>
                                <div></div>
                                <div>

                                    <div className="password-entry">
                                        <label htmlFor="" className="password-label"> Priority</label>
                                    </div>
                                    <div className="placeholder-username">
                                        <select 
                                        type="text" 
                                        name="status"
                                        className="input-username"
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: parseInt(e.target.value) })}
                                        > 
                                        <option > Choose below</option>
                                        <option value={0}> Low</option>
                                        <option value={1}>Medium</option>
                                        <option value={2}> High</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            {!isLoading &&
                            <button type="submit" className="submit-signup">
                                {" "}
                                <Link to="/landing"></Link>
                                <div className="get-started-submission">Create Task</div>

                            </button>}
                            {isLoading && <button type="submit" className="submit-signup" disabled>
                            {" "}
                                <div className="get-started-submission">Redirecting to All Tasks...</div>

                        </button>}
                        </div>

                    </form>


                </div>

            </div>
        </div>
        </>
     );
}
 
export default CreateProject;