const titlesOfChapters = document.querySelectorAll('.book-content-container .section-title'),
    chapters = document.querySelectorAll('.chapter-container'),
    chapterClassname = "chapter-container",
    notes = document.querySelectorAll('.note'),
    noteModals = document.querySelectorAll('.note-modal'),
    closeModal = document.querySelector('.fa-times');

for (let titleOfChapter of titlesOfChapters) {
    document.querySelector('.book-content-container .section-title');

    titleOfChapter.addEventListener('click', function () {

        titleOfChapterId = titleOfChapter.getAttribute('id').replace('#', '');

        for (let chapter of chapters) {
            document.querySelector('.chapter-container');

            chapterId = chapter.getAttribute('id');

            if (titleOfChapterId === chapterId) {
                chapter.classList.toggle('active')
            } else {
                chapter.classList.remove('active')
            }
        }
    });
}


for (let note of notes) {
    document.querySelector('.note');

    note.addEventListener('click', function () {

        noteId = note.getAttribute('id');
        console.log(noteId, "note");
        for (let noteModal of noteModals) {
            document.querySelector('.chapter-container');

            noteModalId = noteModal.getAttribute('id').replace('#', '');
            console.log(noteModalId, "modal");
            if (noteId === noteModalId) {
                noteModal.classList.toggle('active');
                note.classList.toggle('active');
            }
            closeModal.addEventListener('click', function () {
                note.classList.remove('active');
                noteModal.classList.remove('active');
            });
        }
    });
}