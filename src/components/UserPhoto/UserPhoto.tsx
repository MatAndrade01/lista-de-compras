import userImg from '../../assets/img/user.jpg'

const UserPhoto = () => {
    return (
        <>
            <div>
                <img className='rounded-full w-10 ml-5 flexs' src={userImg} alt="Foto de usuario" />
            </div>
        </>
    )
}

export default UserPhoto;