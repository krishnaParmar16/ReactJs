import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { auth, db, provider } from "../../firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';

function Dashboard() {
  const [uid, setUid] = useState(null);
  const [data, setData] = useState("");
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [record, setRecord] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      }
    });
  }, []);

  useEffect(() => {
    if (uid) {
      fetchUser();
      fetchData();
    }
  }, [uid]);

  console.log(uid);
  

  const fetchUser = async () => {
    const userDoc = await getDoc(doc(db, "Users", uid));
    if (userDoc.exists()) setData(userDoc.data());
  };

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "Tasks"));
    const allData = querySnapshot.docs.map((el) => ({ docId: el.id, ...el.data() }));
    setRecord(allData);
  };

  const addTask = async () => {
    if (editIndex == null) {
      const docRef = await addDoc(collection(db, "Tasks"), { userId: uid, task, priority });
      setRecord([...record, { docId: docRef.id, userId: uid, task, priority }]);
    } else {
      await updateDoc(doc(db, "Tasks", editIndex), { task, priority });
      fetchData();
    }
    setTask("");
    setPriority("");
    setEditIndex(null);
  };


  const handleEdit = (id) => {
    const singleData = record.find((el) => el.docId === id);
    setTask(singleData.task);
    setPriority(singleData.priority);
    setEditIndex(id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Tasks", id));
    setRecord(record.filter((el) => el.docId !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <p className="text-2xl font-bold mb-6">Welcome, {data.username}</p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-600 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-600 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button
          onClick={addTask}
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition cursor-pointer"
        >
          {editIndex == null ? "Add Task" : "Update Task"}
        </button>
       
      </div>
      <table className="w-full max-w-3xl mt-6 border-collapse border border-gray-700 text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-700 p-3">Task</th>
            <th className="border border-gray-700 p-3">Priority</th>
            <th className="border border-gray-700 p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {record && record.map((el) => (
            <tr key={el.docId} className="text-center bg-gray-700 border-b border-gray-600">
              <td className="p-3">{el.task}</td>
              <td className="p-3">{el.priority}</td>
              <td className="p-3 flex justify-center gap-2">
                <button onClick={() => handleEdit(el.docId)} className="bg-yellow-500 px-3 py-1 rounded cursor-pointer hover:bg-yellow-600">Edit</button>
                <button onClick={() => handleDelete(el.docId)} className="bg-red-500 px-3 py-1 rounded cursor-pointer hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
