import PropTypes from "prop-types";

export function Button({ name, fetchJoke }) {
  return (
    <button
      onClick={fetchJoke}
      className="bg-carambarP hover:bg-pink-500 text-white font-text font-bold py-2 px-4 rounded cursor-pointer w-48"
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  fetchJoke: PropTypes.func.isRequired,
};
