import CustomCursor from '../components/CustomCursor.jsx'

export default async function Home() {

  return (
    <>
      <div className='cursor-none'>


        <CustomCursor />
        {/* <div className="w-full h-screen flex items-center border flex-col">
        <div className="w-200 h-10 flex justify-center shadow-sm rounded-md mt-5 bg-amber-100">
          <input type="text" className="w-[84%] border-none outline-none px-2" />
          <button type="button" className="w-[15%]">submit</button>
        </div>

        <div className="listDiv w-200 mt-5">
          <div className="singleList w-200 h-10 flex justify-center items-center bg-green-100">
            <span className="w-[70%] flex items-center pl-2 h-full">Some Text</span>
            <div className="btnGroup w-[30%] flex h-full">
              <button type="button" className="btn w-[33%] cursor-pointer">Mark</button>
              <button type="button" className="btn w-[33%] cursor-pointer">Edit</button>
              <button type="button" className="btn w-[33%] cursor-progress">delete</button>
            </div>
          </div>
        </div>

      </div> */}
      </div>
    </>
  );
}
