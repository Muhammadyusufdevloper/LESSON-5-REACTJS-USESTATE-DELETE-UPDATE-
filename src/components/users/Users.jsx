import React, { Fragment, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import "./Users.scss";
import Modal from "../modal/Modal";

const Users = () => {
  const [fname, setFname] = useState("Wera");
  const [lname, setLname] = useState("Qwery");
  const [img, setImg] = useState(
    "https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg"
  );
  
  const [userModal,setUserModal] = useState(null)
  const [editUser,setEditUser] = useState(null)
  const [bDate, setbDate] = useState("2002-06-24");
  const [address, setAddress] = useState("Amerka");
  const [gender, setGender] = useState("");
  const [users, setUsers] = useState([]);
  const [tel,setTel] = useState("")
  console.log(editUser);
  const setUser = (event) => {
    event.preventDefault();
    if (editUser) {
        let index = users?.findIndex(el => el.id = editUser.id)
        let updateUser = {
            id:editUser.id,
            img,
            fname,
            lname,
            brithDate: bDate,
            tel: tel,
            address,
            gender:gender,
        }
        let updatedUsers = users
        updatedUsers.splice(index,1,updateUser)
        setUsers(updatedUsers)
        setEditUser(null)
    }else{
        let user = {
          id: new Date().getTime(),
          img,
          fname,
          lname,
          brithDate: bDate,
          tel: tel,
          address,
          gender:gender,
        };
        setUsers((prev) => [...prev, user]);
    }
    setFname("");
    setLname("");
    setImg("");
    setbDate("");
    setGender("")
    setAddress("");
  };
  const userDelet = (id)=>{
      if (confirm("Are you sure")) {
          let filterUser = users?.filter((user)=> user.id !== id)
          setUsers(filterUser)
        }
    }
    const hendilEdit = (user)=>{
        setEditUser(user)
        setFname(user.fname);
        setLname(user.lname);
        setImg(user.img);
        setbDate(user.brithDate);
        setGender(user.gender)
        setAddress(user.address);
    }
    const mapUser = users?.map((user) => (
      <div className="user__card" key={user.id}>
        <div className="user__card-img">
          <img src={user.img} alt="user img" />
          <div className="user__delete-edit-boxes">    
            <button className="user__icon" onClick={()=>userDelet(user.id)}>
              <MdDeleteOutline className="user__detele-edit__icon" />
            </button>
            <button className="user__icon">
              <FaUserEdit className="user__detele-edit__icon" onClick={()=>hendilEdit(user)}/>
            </button>
          </div>
        </div>
        <div className="user__card-info">
          <h3 className="user__ful-name">
            {user.fname.slice(0, 1).toUpperCase() +
              user.fname.slice(1).toLowerCase() +
              " " +
              user.lname.slice(0, 1).toUpperCase() +
              user.lname.slice(1).toLowerCase()}
          </h3>
          <p className="user__date">{user.brithDate}</p>
          <p className="user__phone">tel: {tel}</p>
          <p className="user__date">{user.address}</p>
          <p className="user__gender">{user.gender}</p>
          <button className="user__btn-see-more" onClick={()=> setUserModal(user)}>Single page</button>
        </div>
      </div>
    ));
  return (
    <Fragment>
      <section className="user">
        <div className="container user__wrapper">
          <div className="user__left--boxes">
            <form className="user__form" onSubmit={setUser}>
              <div className="user__from__cards">
                <div className="user__from__card">
                  <label className="user__form__lable" htmlFor="fname">
                    First name
                  </label>
                  <input
                    className="user__form__input"
                    value={fname}
                    onChange={(event) => setFname(event.target.value)}
                    id="fname"
                    type="text"
                    required
                    placeholder="first name"
                  />
                </div>
                <div className="user__from__card">
                  <label className="user__form__lable" htmlFor="lname">
                    Last name
                  </label>
                  <input
                    className="user__form__input"
                    value={lname}
                    onChange={(event) => setLname(event.target.value)}
                    id="lname"
                    type="text"
                    required
                    placeholder="last name"
                  />
                </div>
                <div className="user__from__card">
                  <label className="user__form__lable" htmlFor="fname">
                    Img url
                  </label>
                  <input
                    className="user__form__input"
                    value={img}
                    onChange={(event) => setImg(event.target.value)}
                    id="fname"
                    type="text"
                    required
                    placeholder="Img url"
                  />
                </div>
                <div className="user__from__card">
                  <label className="user__form__lable" htmlFor="bdate">
                    Brith date
                  </label>
                  <input
                    className="user__form__input"
                    value={bDate}
                    onChange={(event) => setbDate(event.target.value)}
                    id="bdate"
                    type="date"
                    required
                    placeholder="Brith date name"
                  />
                </div>
                <div className="user__from__card">
                  <label className="user__form__lable" htmlFor="tel">
                    Tel
                  </label>
                  <input
                    className="user__form__input"
                    value={tel}
                    onChange={(event) => setTel(event.target.value)}
                    id="tel"
                    type="text"
                    maxLength={16}
                    minLength={16}
                    required
                    placeholder="phone"
                  />
                </div>
                <div className="user__from__card">
                  <label className="user__form__lable" htmlFor="addres">
                    Address
                  </label>
                  <input
                    className="user__form__input"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    id="address"
                    type="text"
                    required
                    placeholder="Address"
                  />
                </div>
                <div className="user__from__card">
                  <label className="user__form__lable" htmlFor="gender">
                    Gender
                  </label>
                  <select value={gender} onChange={(event) => setGender(event.target.value)} className="user__form__input">
                    <option hidden selected value="Gender">Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </div>
              </div>
              <button className="user__submit">{editUser?"Save": "Submit"}</button>
            </form>
          </div>
          <div className="user__right--boxes">
            {mapUser}
          </div>
        </div>
      </section>
      
      {
        userModal ? <Modal userModal={userModal}  setUserModal={setUserModal}/> : <></>
      }
    </Fragment>
    );
};

export default Users;
