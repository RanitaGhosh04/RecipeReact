import React from 'react'

const Header = () => {
  return (
    <div>
    <div className="min-h-96 flex flex-col gap-4 justify-center items-center bg-slate-400">
      <h1 className="text-3xl text-white">Receipe app</h1>
      <div className="flex gap-3">
        <input
          type="search"
          placeholder="search"
        //   value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button onClick={()=>console.log('click')}>🔎</button>
      </div>
    </div>
    {/* {renderMealsSection()} */}
  </div>
  )
}

export default Header