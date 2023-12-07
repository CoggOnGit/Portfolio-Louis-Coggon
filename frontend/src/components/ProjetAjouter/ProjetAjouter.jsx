import React, { useState } from 'react';
import './ProjetAjouter.scss';

function ProjetAjouter() {
    const [imagePreviews, setImagePreviews] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const previews = files.map(file => {
            return URL.createObjectURL(file);
        });

        setImagePreviews(previews);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        // Ici, vous pouvez ajouter votre logique pour gérer la soumission du formulaire
    };

    return (
        <section className='addSection'>

            <form className='addForm' onSubmit={handleSubmit}>
                <div className='addFormDiv'>
                    <label htmlFor='name'>Nom du projet :</label>
                    <input type='text' name='name' id='name' required />
                </div>
        
                <div className='addFormDiv'>
                    <label htmlFor='description'>Description :</label>
                    <input type='text' name='description' id='description' />
                </div>

                <div className='addFormDiv'>
                    <label htmlFor='contraintes'>Contraintes :</label>
                    <input type='text' name='contraintes' id='contraintes' />
                </div>

                <div className='addFormDiv'>
                    <label htmlFor='lien'>Lien :</label>
                    <input type='text' name='lien' id='lien' required />
                </div>

                <div className='addFormDiv'>
                <label htmlFor='category'>Catégorie :</label>
                    <select name='category' id='category' required>
                        <option value="">Choisir une catégorie</option>
                        <option value="Web design">Web design</option>
                        <option value="Web dev">Web dev</option>
                        <option value="Print">Print</option>
                        <option value="Logo">Logo</option>
                    </select>
                </div>

                <div className='addFormDiv'>
                    <label htmlFor='tags'>Tags :</label>
                    <input type='text' name='tags' id='tags' required />
                </div>

                <div className='addFormDiv'>
                    <label htmlFor='pictures'>Images :</label>
                    <input 
                        type='file' 
                        name='pictures' 
                        id='pictures' 
                        multiple 
                        required 
                        onChange={handleFileChange} 
                    />
                    <div className='preview-container'>
                        {imagePreviews.map((preview, index) => (
                            <img key={index} src={preview} alt="Preview" />
                        ))}
                    </div>
                </div>
                

                <input className='addBtn' type="submit" value="PUBLIER"  />
            </form>
        </section>

    );
}

export default ProjetAjouter;