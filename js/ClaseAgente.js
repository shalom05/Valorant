class Character {
    constructor(uuid, name, description, fullImage, iconImage, role, roleIcon, ability1Name, ability1Desc, ability1Icon, ability2Name, ability2Desc, ability2Icon, ability3Name, ability3Desc, ability3Icon, ability4Name, ability4Desc, ability4Icon) {
        this.uuid = uuid
        this.name = name
        this.description = description
        this.fullImage = fullImage
        this.iconImage = iconImage
        this.role = role
        this.roleIcon = roleIcon
        this.ability1Name = ability1Name
        this.ability1Desc = ability1Desc
        this.ability1Icon = ability1Icon
        this.ability2Name = ability2Name
        this.ability2Desc = ability2Desc
        this.ability2Icon = ability2Icon
        this.ability3Name = ability3Name
        this.ability3Desc = ability3Desc
        this.ability3Icon = ability3Icon
        this.ability4Name = ability4Name
        this.ability4Desc = ability4Desc
        this.ability4Icon = ability4Icon

        if (role === "Initiator") {
            this.roleNumber = "02"
        }

        if (role === "Duelist") {
            this.roleNumber = "01"
        }

        if (role === "Sentinel") {
            this.roleNumber = "03"
        }

        if (role === "Controller") {
            this.roleNumber = "04"
        }
    }

    toCards() {
        return `
        <div class="card" onclick="enviarADetalle('${this.uuid}')">
            <img id="img" src="${this.fullImage}" alt="${this.name} image">
            <i class="fa-regular fa-heart" style="color: #ffffff;" onclick="event.stopPropagation(); addFavorite('${this.uuid}')" ></i>
            <div class="intro">
                <h2>${this.name}</h2>
                <h4><span>${this.roleNumber}</span> ${this.role} <img id="img2" src="${this.roleIcon}" alt=""></h4>
                <p>${this.description}</p>
            </div>
        </div>
        `
    }
        toCardsFavorite() {
            return `
        <div class="card" onclick="enviarADetalle('${this.uuid}')">
            <img id="img" src="${this.fullImage}" alt="${this.name} image">
            <i class="fa-solid fa-heart" id="nose" onclick="event.stopPropagation(); deleteFavorite('${this.uuid}')"></i>
            <div class="intro">
                <h2>${this.name}</h2>
                <h4><span>${this.roleNumber}</span> ${this.role} <img id="img2" src="${this.roleIcon}" alt=""></h4>
                <p>${this.description}</p>
            </div>
        </div>
        `
        }

    changeInformation() {
        fullAgent.src = `${this.fullImage}`
        titleAgent.innerHTML = `${this.name}`
        abilitie1Text.innerHTML = `${this.ability1Desc}`
        abilitie1Img.src = `${this.ability1Icon}`
        abilitie2Text.innerHTML = `${this.ability2Desc}`
        abilitie2Img.src = `${this.ability2Icon}`
        abilitie3Text.innerHTML = `${this.ability3Desc}`
        abilitie3Img.src = `${this.ability3Icon}`
        abilitie4Text.innerHTML = `${this.ability4Desc}`
        abilitie4Img.src = `${this.ability4Icon}`

    }
}