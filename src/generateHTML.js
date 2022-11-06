// generate manager card
const generateManager = manager => {
    return`
    <div class="col-4 mt-4">
        <div class="card h-110">
            <div class="card-title">
                <h2>${manager.name}</h2>
            </div>
        </div>
    </div>`
};