const InputBtn = ({ productCount, setProductCount }) => {

  return (
    <>
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                className="product-quantity-btn"
                type="number"
                value={productCount}
                onChange={(e) => setProductCount(e.target.value)}
            />
        </form>
    </>
  )
}

export default InputBtn
