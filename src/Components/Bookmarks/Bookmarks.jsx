import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {

    return (  
           <div className='md:w-1/3'>
            <div className='ml-4 mt-8 border-2 border-indigo-500 rounded-xl'>
                <h3 className='text-2xl font-bold text-[#6047EC] px-10 py-5'>Spent time on read : {readingTime} min</h3>
            </div>
             <div className="bg-gray-100 ml-4 mt-8 rounded-xl py-4">
            <h2 className="text-3xl font-bold text-center">Bookmarked Blog : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
           </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime: PropTypes.number,
}
export default Bookmarks;