
import React, { FC,  useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RootStore} from "../state/Store";
import {GetMovie} from "../state/actions/MovieActions"

const Homepage: FC = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch();
  const movieState = useSelector((state: RootStore) => state.movie);
  const handleSubmit = () => {
    dispatch(GetMovie(search))
  };

  return (
    <div>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 flex justify-center sm:px-6 lg:px-8">
            {/* <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1> */}
            <div className="  w-full">
              <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
                  <div className="w-full justify-evenly relative"> 
                  <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="h-14 w-full pr-8 pl-5 rounded z-0 border border-gray-200 focus:shadow outline-gray-300" placeholder="Search anything..."/>
                      <button onClick={handleSubmit} className="bg-blue-300 top-0 bottom-0 rounded absolute right-0 p-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> Search</button>
                  </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-6 sm:px-0">
              <div className=" rounded-lg h-96">
              
              {movieState.loading && (
                <p>Loading...</p>
              )}

              { movieState.movie && (
                <div>
                  { movieState.movie.count > 0 ? 

                    // <div>
                    //   <h3>{movieState.movie.results[0].title}</h3>
                    //   <small>Released: {movieState.movie.results[0].release_date}</small>
                    //   <p>Director: {movieState.movie.results[0].director}</p>
                    //   <p>Produced by: {movieState.movie.results[0].producer}</p>
                    //   <p>Added: {movieState.movie.results[0].created} and edited: {movieState.movie.results[0].edited}</p>
                    // </div> 

                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">{movieState.movie.results[0].title}</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">{movieState.movie.results[0].opening_crawl}</p>
                      </div>
                      <div className="border-t border-gray-200">
                        <dl>
                          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Director</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{movieState.movie.results[0].director}</dd>
                          </div>
                          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Produced by </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{movieState.movie.results[0].producer}</dd>
                          </div>
                          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Date Added</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{movieState.movie.results[0].created}</dd>
                          </div>
                          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Edited</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{movieState.movie.results[0].edited}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    : <div>No Data</div>}
                </div>
              )}

              </div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
    </div>
  )
}

export default Homepage