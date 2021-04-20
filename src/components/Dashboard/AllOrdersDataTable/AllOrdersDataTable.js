import React from 'react';

const AllOrdersDataTable = ({ orders }) => {

    const handleChange = (e, id) => {
        console.log(e.target.value)
        fetch(`https://sleepy-atoll-80753.herokuapp.com/update/${id}`, {
            method: "PATCH",
            headers: {'content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({ status: e.target.value})
        })
    }
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email ID</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Pay with</th>
                    <th className="text-secondary" scope="col">Status</th>

                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.service}</td>
                            <td>Creadit Card</td>
                           <td>
                           <form class="form-inline">
                                <label class="my-1 mr-2" for="inlineFormCustomSelectPref"></label>
                                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
                                    select
                                    size="small"
                                    
                                    onChange={(e) => handleChange(e, order._id)}
                                >
                                    {/* <option selected>Choose...</option> */}
                                    <option value="Pending">Pending</option>
                                    <option value="On going">On Going</option>
                                    <option value="Done">Done</option>
                                </select>

                                {/* <div class="custom-control custom-checkbox my-1 mr-sm-2">
                                    <input type="checkbox" class="custom-control-input" id="customControlInline" />
                                    <label class="custom-control-label" for="customControlInline">Remember my preference</label>
                               </div>

                                    <button type="submit" class="btn btn-primary my-1">Submit</button> */}
                          </form>
                           </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AllOrdersDataTable;