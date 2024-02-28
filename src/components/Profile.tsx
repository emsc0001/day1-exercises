type ProfileProps = {
    name: string;
    email: string;
    isActive: boolean;
    singleLine: boolean;
    };


export default function Profile({email, isActive, name, singleLine} : ProfileProps) {

     if (singleLine) 
        return (
            <p>{name}, {email}, {isActive?"Aktiv":"Ikke Aktiv"}</p>
        );

     return (
        <div style= {{fontWeight:"bold"}}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{isActive?"Aktiv":"Ikke Aktiv"}</p>
        </div>
     );
}