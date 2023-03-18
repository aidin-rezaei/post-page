import Effect from "../Effect";

const Content = ({ children }) => {
    return (
        <div className="flex justify-center items-top">
            <main className={'main relative m-5 w-[600px] h-[100%] dark:text-white overflow-hidden z-10'}>
                <Effect/>
                {children}
            </main>
        </div>
    );
}

export default Content;