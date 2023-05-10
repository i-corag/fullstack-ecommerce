const ErrorMsg = ({ error }) => {
    return (
        <div className="w-fit my-14 mx-auto">
            <p className="bg-red-600 border-red-500 text-red-600 bg-opacity-25 text-center p-4">{error}</p>
        </div>
    )
}

export default ErrorMsg