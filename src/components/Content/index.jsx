import Effect from "../Effect";

const Content = ({ children }) => {
    return (
        <div className="flex justify-center items-top max-w-[100%]">
            <main className={'main relative m-5 w-[700px] h-[100%] dark:text-white overflow-hidden '}>
                <Effect/>
                {children}
            </main>
        </div>
    );
}

export default Content;