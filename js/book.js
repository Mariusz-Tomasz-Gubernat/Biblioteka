const titlesOfChapters = document.querySelectorAll('.book-content-container .section-title'),
    chapters = document.querySelectorAll('.chapter-container'),
    chapterClassname = "chapter-container";



for (let titleOfChapter of titlesOfChapters) {
    document.querySelector('.book-content-container .section-title');

    titleOfChapter.addEventListener('click', function () {

        titleOfChapterId = titleOfChapter.getAttribute('id').replace('#', '');

        console.log(titleOfChapterId);

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