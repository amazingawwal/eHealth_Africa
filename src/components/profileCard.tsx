import type{ ProfileCardType } from "../assets/types/types"


export default function ProfileCard( {profiles}: ProfileCardType) {
    console.log(profiles)
    return(
        <div className="parent" >
            {
                profiles.map( profile => (
                        <div key={profile.id} className="profile-card">
                            <img src={profile.image} alt="profile image" />
                            <div className="details">
                                <p>{profile.name}</p>
                                <p>{profile.description}</p>
                            </div>
                        </div>
                )
            )
            }
        </div>
)
};


