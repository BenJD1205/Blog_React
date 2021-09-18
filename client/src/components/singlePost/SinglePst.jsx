import React from 'react'
import './singlePst.css'
import {useLocation} from 'react-router'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Context} from '../../context/Context'

export default function SinglePst() {

    const PF = "http://localhost:5000/images/"

    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post,setPost] = React.useState({})
    const {user} = React.useContext(Context)
    const [title, setTitle] = React.useState("")
    const [desc, setDesc] = React.useState("")
    const [updateMode, setUpdateMode] = React.useState(false)

    React.useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    },[path])

    const handleDelete = async () => {
        await axios.delete("/posts/"+path, {data:{username:user.username}})
        window.location.replace("/")
    }

    const handleUpdate = async () => {
        await axios.put("/posts/"+path, {
            username:user.username,
            title,
            desc
        })
        setUpdateMode(false)
    }

    return (
        <div className="singlePst">
            <div className="singlePstWrapper">
                {post.photo && (
                    <img 
                        src={PF+post.photo}
                        alt=""
                        className="singlePstImg"
                    />
                )}
                {
                    updateMode ? <input 
                                    type="text" 
                                    value={title} 
                                    className="singlePstTitleInput" 
                                    onChange={e=>setTitle(e.target.value)}
                                    autoFocus={false}
                                /> : (

                        <h1 className="singlePstTitle">
                            {post.title}
                            {post.username === user?.username && (
                                <div className="singlePstEdit">
                                    <i 
                                        className="singlePstIcon fas fa-edit"
                                        onClick={() =>setUpdateMode(true)}
                                    >
                                    </i>
                                    <i className="singlePstIcon far fa-trash-alt" onClick={handleDelete}></i>
                                </div>
                            )}
                        </h1>
                    )
                }
                <div className="singlePstInfo">
                    <span className="singlePstAuthor">
                        Author:
                        <Link to={`/?user=${post.username}`} className="link">

                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePstDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {
                    updateMode ? (
                        <textarea 
                            className="singlePstTitleInput"
                            onChange={e=>setDesc(e.target.value)}
                            value={desc}
                        >
                        </textarea>
                    ) : (
                        <p className="singlePstDesc">
                            {desc}
                        </p>
                    )
                }
                {
                    updateMode && (
                        <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                    )
                }
            </div>
        </div>
    )
}
