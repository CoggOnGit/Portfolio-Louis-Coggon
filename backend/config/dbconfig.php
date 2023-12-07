<?php
// Chargement de l'autoloader de Composer
require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;

// Instanciez et chargez Dotenv
$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

// Récupération des variables d'environnement
$db_host = isset($_ENV['DB_HOST']) ? $_ENV['DB_HOST'] : null;
$db_name = isset($_ENV['DB_NAME']) ? $_ENV['DB_NAME'] : null;
$db_user = isset($_ENV['DB_USER']) ? $_ENV['DB_USER'] : null;
$db_password = isset($_ENV['DB_PASSWORD']) ? $_ENV['DB_PASSWORD'] : null;

// Vérifiez si toutes les variables d'environnement nécessaires sont définies
if (!$db_host || !$db_name || !$db_user || !$db_password) {
    throw new Exception("Les informations de connexion à la base de données sont manquantes.");
}

// Connexion à la base de données
try {
    $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    throw new Exception("Erreur de connexion : " . $e->getMessage());
}
?> 