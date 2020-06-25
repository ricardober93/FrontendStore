export default function UserCard({name , role}) {
    return (
        <div className="user__profile">

        <div className="img_profile">
          <img src="./public/img/img1.jpg" alt="" className="profile" />
        </div>

        <div clasNames="text__profile">
          <h3 className="role__profile"> {name} </h3>
          <p className="name__profile"> {role} </p>
        </div>

      </div>
    )
}
 