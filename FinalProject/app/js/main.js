// Needed to allow CROSS-domain requests
$.ajaxSetup({
    crossDomain : true,
    cache : false,
    contentType : "application/json",
    dataType : "json"
});

// Router
var AppRouter = Backbone.Router
    .extend({

        routes : {
            "students" : "students",
            "questionnaires/student/:id" : "questionnairesOfaStudent"
        },

        students : function(id) {
            var studentsCollection = new StudentsCollection();

            studentsCollection
                .fetch({
                    success : function() {

                        // create view and pass collection
                        var studentsListView = new StudentsListView(
                            {
                                collection : studentsCollection
                            });
                        studentsListView.flush();
                        studentsListView.render();
                    }
                });
        },

        questionnairesOfaStudent : function(studentID) {
            var questionnaireOfAStudentCollection = new QuestionnairesOfAStudentCollection(
                [], {
                    id : studentID
                });

            questionnaireOfAStudentCollection
                .fetch({
                    success : function() {
                        var questionnaireOfAStudentView = new QuestionnaireOfAStudentView(
                            {
                                collection : questionnaireOfAStudentCollection
                            });

                        questionnaireOfAStudentView.flush();
                        questionnaireOfAStudentView.render();
                    }
                });
        }
    });

// Base Url
var baseUrl = "http://www.lucalongo.eu/courses/2014-2015/questionnaireDIT/app/index.php";

// Base Model
var BaseModel = Backbone.Model.extend();

// students Collection
var StudentsCollection = Backbone.Collection.extend({
    model : BaseModel,
    url : this.baseUrl + "/students"
});

// questionnaires of a student Collection
var QuestionnairesOfAStudentCollection = Backbone.Collection.extend({
    model : BaseModel,
    baseURL : this.baseUrl,
    initialize : function(models, options) {
        this.url = this.baseURL + "/questionnaires/student/" + options.id;
    }
});

/**
 * VIEWS
 */

// Students List View
var StudentsListView = Backbone.View.extend({
    el : "#students",

    render : function() {
        var self = this;
        // this collections models coincides with the list of objects in the
        // collection
        _.each(this.collection.models, function(model) {

            var studentsListItemView = new StudentsListItemView({
                model : model
            });

            studentsListItemView.render();
            // this.$el is a backbone shorcut to get the jquery object el
            self.$el.append(studentsListItemView.$el);
        });
    },

    flush : function() {
        this.$el.empty(); // jquery method
    }

});

// Students List Item View (student item)
var StudentsListItemView = Backbone.View.extend({

    tagName : "li",
    template : _.template($("#studentListItemTemplate").html()),

    render : function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

// questionnaires of a student
var QuestionnaireOfAStudentView = Backbone.View.extend({

    el : $("#questionnaires"),

    render : function() {
        var self = this;
        var counter = 0;
        _.each(this.collection.models, function(model) {
            var questionnaireListItemView = new QuestionnaireListItemView({
                model : model
            });
            counter++;
            questionnaireListItemView.render();
            self.$el.append(questionnaireListItemView.$el);
        });

        var d3_Radial_Progress = new D3_Radial_Progress ();
        var maxValue = 13;
        var percentage = counter*100/maxValue;
        d3_Radial_Progress.render(percentage);
    },

    flush : function() {
        this.$el.empty(); // jquery method
    }
});

// Students List Item View (student item)
var QuestionnaireListItemView = Backbone.View.extend({

    tagName : "li",
    template : _.template($("#questionnaireListItemTemplate").html()),

    render : function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});


var D3_Radial_Progress = Backbone.View.extend({

    el : "#radialProgressContainer",

    render : function (percentage){
        var rp1 = radialProgress(this.$el[0])
            .label("% of questionnaires")
            .diameter(200)
            .value(percentage)
            .render();

    }
});


// Init the App Router
new AppRouter();
Backbone.history.start();