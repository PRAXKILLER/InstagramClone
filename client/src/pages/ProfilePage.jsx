import React from "react";

function ProfilePage() {
    return(
        <div className="flex m-auto justify-center">
            <header className="flex h-auto">
                <div className="flex m-auto p-9">
                    <img className="flex rounded-full w-20 h-20" src="https://images.unsplash.com/photo-1658830116676-198d5feb387e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" alt="Profile Picture" />
                </div>
                <section className="flex m-auto ">
                    <div className="flex justify-self-auto">
                        <h2>Username</h2>
                        <button>Edit Profile</button>
                        <button>Settings</button>
                    </div>
                    <ul className="flex self-center">
                        <li>10 posts</li>
                        <li>100 followers</li>
                        <li>100 following</li>
                    </ul>
                    <div className="self-end">
                        <div>Name of the User</div>
                        <div>Description/Bio</div>
                    </div>
                </section>
            </header>
            <hr />
        </div>
    )
}

export default ProfilePage;