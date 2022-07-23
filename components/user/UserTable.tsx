import UserAPI from "api/user";
import ConfirmDialog from "components/dialog/ConfirmDialog";
import { useEffect, useState } from "react";
import { IUser } from "../../types/User";
import UserItem from "./UserItem";
import UserUpdate from "./UserUpdate";


  const UserTable =  () => {
    const [allUsers, setAllUsers] = useState<IUser[]>([    { _id: "1", username: "foo" },
    { _id: "2", username: "bar"},]);
    const [users, setUsers] = useState<IUser[]>(allUsers);
    const [inputname, setInputname] = useState("");
    const [listPage, setListPage] = useState(1);
    
    const [currentItem, setCurrentItem] = useState<IUser>({
      username: "",
      _id:'0',
    });

    useEffect(() => {
      async function getUsers() {
        try {
          const response = await UserAPI.getAll();
          if (response.data.length > 0) {
            setAllUsers(response.data);
            setUsersList(response.data)}
        } catch (error) {
          console.log(error);
        }
      }
      getUsers();
    }, []);

    const onDeleteClick = async () => {
      try {
        const response = await UserAPI.delete(currentItem._id);
        /*response.status !== 200
          ? alert("User successfully deleted!")
          : alert("Uups! Something went wrong!");*/
      } catch (error) {
        console.log(error);
      }
      setAllUsers(allUsers.filter(el => el._id != currentItem._id))
      setUsersList(allUsers);
      setUsers(users)
    };
    const onUpdateClick = async () => {
      try {
        const response = await UserAPI.update(currentItem);
        response.status !== 200
          ? alert("User successfully updated!")
          : alert("Uups! Something went wrong!");
      } catch (error) {
        console.log(error);
      }
      setAllUsers(
        allUsers.map((el) => {
          return el._id === currentItem._id ? currentItem : el;
        })
      );
      setUsersList(allUsers);
    };

    const setUsersList = (users) => {
      setUsers(users.sort((a, b) => a.username.localeCompare(b.username)))
    }

    const onSearchClick = (input) => {
      setUsers(
        allUsers.filter(
          (el) => el.username.includes(input))
      )
    }


    const handleKeyDown = (e) => {
      if (e.key === 'Enter'){
        e.preventDefault();
        onSearchClick(inputname);
      }
    }
    
    const renderTable = () => {
      if(localStorage.getItem("userType") == "2"){
        return(
          <table className="table table-hover m-3" style={{lineHeight:2}}>
          <thead>
            <tr>
              <th className="text-center col-md-1">Nr</th>
              <th className="text-center col-md-4">Name</th>
              <th className="text-center col-md-4">Rolle</th>
              <th className="text-center col-md-1">Reservierungen</th>
              <th className="text-center col-md-1">Bearbeiten</th>
              <th className="text-center col-md-1">Löschen</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((userItem, index) => {
              if((listPage-1)*10<=index && index<(listPage)*10){
              return (
                <UserItem
                  key={userItem._id}
                  userItem={userItem}
                  count={++index}
                  setCurrentItem={setCurrentItem}
                ></UserItem>
              );}
            })}
          </tbody>
        </table>)
      }else{
        return(
          <table className="table table-hover m-3" style={{lineHeight:2}}>
          <thead>
            <tr>
              <th className="text-center col-md-1">Nr</th>
              <th className="text-center col-md-6">Name</th>
              <th className="text-center col-md-5">Rolle</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((userItem, index) => {
              if((listPage-1)*10<=index && index<(listPage)*10){
              return (
                <UserItem
                  key={userItem._id}
                  userItem={userItem}
                  count={++index}
                  setCurrentItem={setCurrentItem}
                ></UserItem>
              );}
            })}
          </tbody>
        </table>
        )
      }
    }

    return (
      <>
        <div className="form-control" style={{border: "none"}}>
          <div className="input-group" pb-value="2">
            <div className="form-outline">
              <form>
                <input placeholder="Benutzername" value={inputname} onChange={evt =>{ setInputname(evt.target.value); onSearchClick(inputname)}}
                type="search" className="form-control" autoComplete="off" onKeyDown={handleKeyDown} style={{outlineColor:"red"}}/>
              </form>
            </div>
              <a type="button" className="btn btn-primary " onClick={() => onSearchClick(inputname)}>
                <i
                  className="bi bi-search"
                  vertical-align="middle"
                />
              </a>
        </div>
        {renderTable()}
        {listPage != 1 ?
        <button className="btn-primary border-dark rounded" onClick={() => setListPage(listPage-1)}>
            <i className="bi bi-arrow-left"></i>
        </button>
        :<button className="btn-primary border-dark rounded" style={{"backgroundColor":"grey"}}>
          <i className="bi bi-arrow-left"></i>
        </button>} 
        <text style={{"marginLeft":"5px", "marginRight":"5px"}}>{listPage}</text>
        {listPage < (users.length)/10 ?
        <button className="btn-primary border-dark rounded" onClick={() => setListPage(listPage+1)}>
          <i className="bi bi-arrow-right"></i>
        </button>
        :<button className="btn-primary border-dark rounded" style={{"backgroundColor":"grey"}}>
          <i className="bi bi-arrow-right"></i>
        </button>}

        <ConfirmDialog
          id={"userDeletion"}
          accept={{ caption: "Löschen", onClick: onDeleteClick }}
          title={"User Löschen"}
          text={`Möchten Sie ${localStorage.getItem("username")} wirklich löschen?`}
        />
        <UserUpdate
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          onSubmit={onUpdateClick}
        />
        </div>
      </>
    );
  };

export default UserTable;
