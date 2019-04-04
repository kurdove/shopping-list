const itemQueries = require("../db/queries.items.js");

module.exports = {
    new(req, res, next){
        res.render("items/new", {listId: req.params.listId});
    },

    create(req, res, next){
        let newItem= {
            title: req.body.title,
            note: req.body.note,
            listId: req.params.listId
        };
        itemQueries.addItem(newItem, (err, item) => {
            // console.log("ITEM: ", item);
            if(err){
                res.redirect(500, "/items/new");
            } else {
                res.redirect(303, `/lists/${item.listId}`);
            }
        });
    },

    destroy(req, res, next){
        itemQueries.deleteItem(req.params.id, (err, deletedRecordsCount) => {
            if(err){
                console.log("Ooops someting went wrong")
                res.redirect(500, `/lists/${req.params.listId}`);
            } else {
                res.redirect(303, `/lists/${req.params.listId}`);
            }
        });
    },

    edit(req, res, next){
        itemQueries.getItem(req.params.id, (err, item) => {
            if(err || item == null){
                res.redirect(404, "/");
            } else {
                res.render("items/edit", {item});
            }
        });
    },

    update(req, res, next){
        itemQueries.updateItem(req.params.id, req.body, (err, item) => {
            if(err || item == null){
                res.redirect(404, `/lists/${req.params.listId}/items/${req.params.id}/edit`);
            } else {
                res.redirect(`/lists/${req.params.listId}`);
            }
        });
    }
}