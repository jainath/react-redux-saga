import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchData } from './store/actions/searchActions';

function App({ searchDataAction, response }) {
  console.log('API echo response:', response);
  return (
    <div className="flex flex-col items-center p-10 md:pt-10 gap-10">
      <div className="text-xl md:w-1/2 text-center">
        Optimized API Management Demo using React, Redux, and Saga
      </div>
      <input
        type="search"
        placeholder="Type here..."
        className="block mt-2 w-full md:w-1/2 lg:w-1/4 placeholder-gray-900/70 dark:placeholder-gray-500 rounded-lg border border-gray-400 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
        onChange={(e) => {
          searchDataAction({
            params: { search: e.target.value },
          });
        }}
      />

      <div className="md:w-1/2 antialiased font-normal text-gray-700 text-center">
        When you type in the input field, this demo uses Redux Saga&apos;s
        takeLatest effect with Axios to ensure only the latest API request is
        processed, aborting any previous ones. This makes the app more efficient
        by reducing unnecessary network calls. Open Chrome Developer Tools and
        check the Network tab to see this in action!
      </div>

      <div>
        <a
          href="https://medium.com/p/76f130dd2081"
          target="_blank"
          className="underline font-semibold"
        >
          Click here
        </a>{' '}
        for more info.
      </div>
    </div>
  );
}

const mapStateToProps = (state = {}) => {
  return {
    response: state?.search?.data?.args?.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchDataAction: (props) => dispatch(searchData(props)),
  };
};

App.propTypes = {
  searchDataAction: PropTypes.func.isRequired,
  response: PropTypes.string,
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
