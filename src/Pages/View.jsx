import React, { useEffect } from 'react'
import Header from '../Component/Header'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, Viewusers, } from '../Redux/action/crud';

const View = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Viewusers());
  }, [])

  const users = useSelector(state => state.crud.users);

  const deleteUserRecord = (id) => {
    dispatch(deleteUser(id))
  }
  return (
    <div>
      <Header />
      <div className="conatiner">
        <div className="row">
          <div className="col-lg-8 mx-auto mt-5">
            <table className="table border">
              <thead>
                <tr>
                  <th scope="col">Sr no</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((u, index) => {
                    return (
                      <tr key={++index}>
                        <td>{++index}</td>
                        <td>{u.name}</td>
                        <td>{u.phone}</td>
                        <td>
                          <button onClick={() => deleteUserRecord(u.id)}>Delete</button>{" "}
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default View
