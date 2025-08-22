import type { ProfileCardType } from "../assets/types/types"


export default function ProfileCard( {profiles}: ProfileCardType) {
    console.log(profiles)
    return(
        <div>
            {
                profiles.map(profile => (
                    <div>{profile.name}</div>
                ))
            }
        </div>
)
};


// profiles.map( profile => (
//         <div className="profile-card">
//             <img src={profile.image} alt="profile image" />
//             <div className="details">
//                 <h1>{profile.image}</h1>
//                 <p>{profile.description}</p>
//             </div>
//         </div>
//         )
//     )