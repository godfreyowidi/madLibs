$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const nounInput= $("input#noun").val();
    const verbsInput = $("input#verbs").val();
    const adjectiveInput = $("input#adjective").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".noun").text(nounInput);
    $(".verb").text(verbInput);
    $(".adjective").text(adjectiveInput);

    $("#story").show();
  });
});