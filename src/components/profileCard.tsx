import type{ ProfileCardType } from "../assets/types/types"


export default function ProfileCard( {profiles}: ProfileCardType) {
    console.log(profiles)
    return(
        <div>
            {
                profiles.map( profile => (
                    <div className="parent" key={profile.id}>
                        <div className="profile-card">
                            <img src={profile.image} alt="profile image" />
                            <div className="details">
                                <h1>{profile.name}</h1>
                                <p>{profile.description}</p>
                            </div>
                        </div>
                    </div>
                        )
                    )
            }
        </div>
)
};


