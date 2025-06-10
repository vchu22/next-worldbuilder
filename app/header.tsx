import SignOutButton from "@/components/signout-button";

const PageHeader = async () => {
    return (
        <header className="">
            <h1 className="audiowide-regular">Next WorldBuilder</h1>
            {/*{session? <SignOutButton/> : null}*/}
            <SignOutButton/>
        </header>
    )
}

export default PageHeader;