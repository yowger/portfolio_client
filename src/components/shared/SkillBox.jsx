import PropTypes from "prop-types"

const SkillBox = ({ label, img }) => {
    return (
        <div className="flex flex-col justify-between rounded-sm bg-sky-950 p-6 text-center text-white shadow-md">
            <div className="mb-5 flex h-full items-center justify-center">
                <img className="w-28" src={img} />
            </div>

            <p className="text-lg font-semibold">{label}</p>
        </div>
    )
}

SkillBox.propTypes = {
    label: PropTypes.string,
    img: PropTypes.node,
}

export default SkillBox
