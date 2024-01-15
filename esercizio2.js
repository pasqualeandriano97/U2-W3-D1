const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

const saveButton = document.querySelector("form button");

const pets = [];
let sameOwner = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  compareownerName(otherownerName) {
    return this.ownerName === otherownerName;
  }
}

const fillRowWithCards = function () {
  const row = document.getElementById("pet");

  row.innerHTML = "";

  pets.forEach((Pet, index) => {
    if (sameOwner[index] === false) {
      Pet.compare = false;
    } else {
      Pet.compare = true;
    }
    const newCol = document.createElement("div");
    newCol.classList.add("col");

    newCol.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${Pet.petName} di ${Pet.ownerName}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${Pet.species}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">${Pet.breed}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">${Pet.compare}</h6>
            </div>
        </div>
        `;

    row.appendChild(newCol);
  });

  petName.value = "";
  ownerNameInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
};

const formReference = document.getElementsByTagName("form")[0];
formReference.addEventListener("submit", function (e) {
  e.preventDefault();

  const contact = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );
  const hasSameOwner = pets.some((pet) =>
    pet.compareownerName(contact.ownerName)
  );

  console.log("CONTATTO CREATO", contact);
  sameOwner.push(hasSameOwner);
  pets.push(contact);

  fillRowWithCards();
});
