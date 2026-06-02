window.addEventListener('load', () => {
    const options = {
        elementId: 'board-container',
        showCoordinates: true,
        playSounds: false,
        assetsBaseUrl: 'static'
    };

    const boardGui = new BoardGui(options);
    boardGui.loadFen(DEFAULT_START_FEN);

    // reset and flip buttons
    document.getElementById('btn-reset').onclick = () => boardGui.loadFen(DEFAULT_START_FEN, true);
    document.getElementById('btn-flip').onclick = () => boardGui.flip();

    // piece style button
    const pieceStyles = [PieceStyleSetting.TRADITIONAL, PieceStyleSetting.ROMANIZED_ROUNDED];
    const pieceStyleLabels = {TRADITIONAL: 'Traditional', ROMANIZED_ROUNDED: 'Romanized'};
    let currentStyleIndex = 0;
    document.getElementById('btn-style').onclick = () => {
        currentStyleIndex = (currentStyleIndex + 1) % pieceStyles.length;
        const style = pieceStyles[currentStyleIndex];
        boardGui.updatePieceStyle(style);
        document.getElementById('btn-style').textContent = 'Pieces: ' + pieceStyleLabels[style];
    };
});
