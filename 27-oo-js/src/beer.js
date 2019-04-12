class Beer {
  this.all = []
  constructor({ name, id, description, tagline, image_url }) {
    this.name = name
    this.id = id
    this.description = description
    this.imageUrl = image_url
    this.tagline = tagline

    this.constructor.all.push(this)
  }

  renderLi() {
    return `<li class="list-group-item" data-id="${this.id}">${this.name}</li>`
  }

  renderDetail() {
    return (
      `<h1>${this.name}</h1>
      <img src=${this.imageUrl}>
      <h3>${this.tagline}</h3>
      <textarea>${this.description}</textarea>
      <button data-id="${this.id}" id="edit-beer" class="btn btn-info">
        Save
      </button>`
    )
  }
}
